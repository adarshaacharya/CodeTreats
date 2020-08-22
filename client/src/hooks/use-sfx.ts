import ting from 'assets/sounds/ting.mp3';
import click from 'assets/sounds/click.mp3';
import useSound from 'use-sound';

export const useSfx = () =>  {
    const [playTing] = useSound(ting, {
        volume: 0.5,
    });

    const [playClick] = useSound(click, {
        volume: 0.5,
    });

    return {
        playTing,
        playClick,
    };
}
