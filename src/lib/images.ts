import type { StaticImageData } from "next/image";
import p1 from "@/images/produkty/p1.jpg";
import p2 from "@/images/produkty/p2.jpg";
import p3 from "@/images/produkty/p3.jpg";
import p4 from "@/images/produkty/p4.jpg";
import p5 from "@/images/produkty/p5.jpg";
import p6 from "@/images/produkty/p6.jpg";
import p7 from "@/images/produkty/p7.jpg";
import p8 from "@/images/produkty/p8.jpg";
import p9 from "@/images/produkty/p9.jpg";
import p10 from "@/images/produkty/p10.jpg";
import p11 from "@/images/produkty/p11.jpg";
import p12 from "@/images/produkty/p12.jpg";
import p13 from "@/images/produkty/p13.jpg";
import p14 from "@/images/produkty/p14.jpg";
import p15 from "@/images/produkty/p15.jpg";
import p16 from "@/images/produkty/p16.jpg";
import p17 from "@/images/produkty/p17.jpg";
import p18 from "@/images/produkty/p18.jpg";
import p19 from "@/images/produkty/p19.jpg";
import p20 from "@/images/produkty/p20.jpg";
import p21 from "@/images/produkty/p21.jpg";
import p22 from "@/images/produkty/p22.jpg";
import hero from "@/images/hero-logowanie.jpg";
import komunikatGodziny from "@/images/komunikat-godziny.jpg";
import komunikatGrill from "@/images/komunikat-grill.jpg";
import pustyKoszyk from "@/images/pusty-koszyk.png";

export const productImages: Record<string, StaticImageData> = {
  p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11,
  p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22,
};

export const messageImages: Record<string, StaticImageData> = {
  m1: komunikatGodziny,
  m2: komunikatGodziny,
  m3: komunikatGrill,
};

export { hero, komunikatGodziny, komunikatGrill, pustyKoszyk };
