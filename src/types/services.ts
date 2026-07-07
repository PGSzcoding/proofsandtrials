export interface TransporteItem {
  title: string;
  description: string;
  image: string | null;
}

export interface ServicioTransporteProps {
  title: string;
  subtitle: string;
  items: TransporteItem[];
}

export interface NormsProps{
    description: string;
    norms: {title:string,description:string}[]
}