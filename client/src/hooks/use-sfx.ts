import ting from 'assets/sounds/ting.mp3';
import useSound from 'use-sound';

export function useSfx() {
    const [playTing] = useSound(ting, {
        volume: 0.5,
    });

    return {
        playTing,
    };
}
