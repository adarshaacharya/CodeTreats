import useSound from 'use-sound';
import ting from 'assets/sounds/ting.mp3';

export function useSfx() {
    const [playTing] = useSound(ting, {
        volume: 0.5,
    });

    return {
        playTing,
    };
}
