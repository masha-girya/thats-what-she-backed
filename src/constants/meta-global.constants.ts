import { Metadata } from "next";

interface IMetaGlobal extends Metadata{};

export const META_GLOBAL: IMetaGlobal = {
  verification: {
    google: process.env.VERIFICATION_GOOGLE,
  }
}