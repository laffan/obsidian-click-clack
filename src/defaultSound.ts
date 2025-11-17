import {
	defaultKey,
	defaultKey2,
	defaultSpace,
	defaultEnter,
	defaultDelete,
} from './default';

import { Howl } from 'howler';

export const defaultSounds = {
	key: new Howl({ src: defaultKey, preload: true, html5: true, pool: 10 }),
	key2: new Howl({ src: defaultKey2, preload: true, html5: true, pool: 10 }),
	space: new Howl({ src: defaultSpace, preload: true, html5: true, pool: 10 }),
	enter: new Howl({ src: defaultEnter, preload: true, html5: true, pool: 10 }),
	delete: new Howl({ src: defaultDelete, preload: true, html5: true, pool: 10 }),
};

export const defaultScheme = {
	id: 'default',
	caption: 'Default',
	sounds: { key: '', key2: '', enter: '', space: '', delete: '' },
};
