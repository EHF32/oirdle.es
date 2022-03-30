export type Song = {
  id: number;
  titulo: string;
  soundcloud_url: string;
  start_sec?: any;
  orden: number;
};

export type Result = {
  uuid: number;
  id_song: number;
  intento: number;
};

export type Fakecomplete = {
  id: number;
  titulo: string;
};
