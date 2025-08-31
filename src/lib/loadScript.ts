// Lightweight utility to load a script once and return a promise when ready
export function loadScriptOnce(src: string, options?: {
    id?: string;
    crossOrigin?: string;
    async?: boolean;
}): Promise<HTMLScriptElement> {
    const { id, crossOrigin = 'anonymous', async = true } = options || {};

    return new Promise((resolve, reject) => {
        // If a script with same id exists, resolve immediately
        if (id) {
            const existingById = document.getElementById(id) as HTMLScriptElement | null;
            if (existingById) {
                resolve(existingById);
                return;
            }
        }

        // If a script with same src already present, resolve
        const existingBySrc = Array.from(document.getElementsByTagName('script')).find((s) => s.src === src);
        if (existingBySrc) {
            resolve(existingBySrc as HTMLScriptElement);
            return;
        }

        const script = document.createElement('script');
        if (id) script.id = id;
        script.src = src;
        script.async = async;
        if (crossOrigin) script.crossOrigin = crossOrigin as any;

        script.onload = () => resolve(script);
        script.onerror = (e) => reject(e);

        document.head.appendChild(script);
    });
}
