/// <reference types="vite/client" />

declare module '*&as=picture' {
  const picture: {
    sources: Record<string, string>
    img: { src: string; w: number; h: number }
  }
  export default picture
}

interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string
}
