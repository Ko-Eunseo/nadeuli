interface BasicTour {
  id: "BASIC";
  name: "기본";
  endpoint: "/KorService1";
}

interface BarrierFree {
  id: "BARRIER_FREE";
  name: "무장애"; //영유아, 장애
  endpoint: "/KorWithService1";
}

interface PetTour {
  id: "PET";
  name: "반려동물";
  endpoint: "/KorService1"; ///detailPetTour1
}

interface Leisure {
  id: "LEISURE";
  name: "레저";
  endpoint: "/Durunubi";
}

export type Endpoint = BasicTour | BarrierFree | PetTour | Leisure;
