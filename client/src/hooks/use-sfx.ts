import useSound from 'use-sound';

export function useSfx() {
    const [playTing] = useSound('https://res.cloudinary.com/aadarsha/video/upload/v1597575408/code_runner/ting.mp3', {
        volume: 0.5,
    });

    return {
        playTing,
    };
}
