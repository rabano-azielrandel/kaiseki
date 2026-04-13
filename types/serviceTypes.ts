export type serviceTypes = {
  id: string;
  title: string;
  subtitle: string;
  mainTitle: string;
  mainDesc: string;
  mainImage: string;
  subImage: string;
  reverse: boolean;
};

export type ServiceRowProps = {
  service: serviceTypes;
  isAnimate: boolean;
};

export type ServiceSubProps = {
  id: string;
  title: string;
  subtitle: string; 
  subImage: string;
  isAnimate: boolean;
};

export type ServiceMainProps = {
  title: string;
  desc: string; 
  image: string;
  isAnimate: boolean;
};