import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { KTX2Loader } from "three-stdlib";
const ktx2Loader = new KTX2Loader();
const useKTX2Loader = (url: string, isDraco: boolean, isMeshOpt: boolean) => {
  const gl = useThree((state) => state.gl);
  const useDraco = isDraco ? './public/libs/draco/' : false;
  const gltf = useGLTF(url, useDraco, isMeshOpt, (loader) => {
    ktx2Loader.setTranscoderPath(`./public/libs/basis/`);
    //@ts-ignore
    loader.setKTX2Loader(ktx2Loader.detectSupport(gl));
  })

  return gltf;
}

export default useKTX2Loader; 