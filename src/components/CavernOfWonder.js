import { Unity, useUnityContext } from "react-unity-webgl";

const CavernOfWonder = () => {
    const { unityProvider } = new useUnityContext({
        loaderUrl: 'build/Cavern of Wonder Webgl.loader.js',
        dataUrl: 'build/Cavern of Wonder Webgl.data',
        frameworkUrl: 'build/Cavern of Wonder Webgl.framework.js',
        codeUrl: 'build/Cavern of Wonder Webgl.wasm',
    });

    return <div className="Unity__container">
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600,  margin: 'auto', display:'block'}} className='Unity'/>
    </div>
}

export default CavernOfWonder;