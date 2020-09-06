import ting from 'assets/sounds/ting.mp3';
import click from 'assets/sounds/click.mp3';
import ipl from 'assets/sounds/ipl.mp3';
import message from 'assets/sounds/message.mp3';
import pop from 'assets/sounds/pop.mp3';

import useSound from 'use-sound';

export const useSfx = () => {
    const [playTing] = useSound(ting, {
        volume: 0.5,
    });

    const [playClick] = useSound(click, {
        volume: 0.5,
    });

    const [playIpl] = useSound(ipl, {
        volume: 0.5,
    });

    const [playGoogle] = useSound(message, {
        volume: 0.5,
    });

    const [playPop] = useSound(pop, {
        volume: 0.9,
    });
    return {
        playTing,
        playClick,
        playIpl,
        playGoogle,
        playPop,
    };
};
