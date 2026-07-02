import { ENV } from "../config/env";

interface FilesResponse {
  files: Certificate[];
  count: number;
}

interface Certificate {
  key: string;
}

interface DownloadResponse {
  downloadUrl: string;
}

interface UploadUrlResponse {
  uploadUrl: string;
  headers?: {"Content-Type"?: string;};
}

export async function getFiles():Promise<FilesResponse>{
  const response = await fetch(`${ENV.API_URL}/files`);
  const data = await response.json();
  console.log(data)

  if (!response.ok) {
    throw new Error(data.error || "Error obteniendo archivos");
  }
  return data;
}

export async function getDownloadUrl(key: string): Promise<DownloadResponse> {
  const response = await fetch(`${ENV.API_URL}/download-url`,{
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify({key,}),}
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Error descargando archivo");
  }
  return data;
}

export async function deleteCertificate(key:string){

  console.log(`${key}`)
  const response = await fetch(`${ENV.API_URL}/files/${key}`,{method:"DELETE"});

  if(!response.ok){
    throw new Error("Delete failed");
  }
  return response.json();
}

export async function uploadFile(file: File): Promise<void> {
  const token = localStorage.getItem("token");
  const contentType = file.type || "application/octet-stream";

  const response = await fetch(`${ENV.API_URL}/upload-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json",Authorization: `Bearer ${token}`,},
    body: JSON.stringify({filename: file.name,contentType,}),
  });

  const data: UploadUrlResponse = await response.json();

  if (!response.ok) {
    throw new Error("Error generando URL de subida");
  } 
  console.log(data)

  const uploadResponse = await fetch(data.uploadUrl, {
    method: "PUT",
    headers: {"Content-Type": data.headers?.["Content-Type"] || contentType,},
    body: file,
  });
  console.log(uploadResponse)

  if (!uploadResponse.ok) {
    throw new Error(`Error al subir archivo (${uploadResponse.status})`);
  }
}

