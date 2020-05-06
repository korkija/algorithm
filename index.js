const outputs = [
    [720],
    [720],
    [],
    [240, 360],
    [240, 720],
    [240],
    [],
    [360],
    [360, 720],
    [240, 360, 720],
    [360],
    [],
]

const inputs = [
    {
        available: [240, 360, 720],
        allowed: [360, 720],
        preferred: [1080],
    },
    {
        available: [240, 720],
        allowed: [360, 720],
        preferred: [1080],
    },

    {
        available: [240],
        allowed: [360, 720],
        preferred: [1080],
    },
    {
        available: [240, 360, 720],
        allowed: [240, 360, 720, 1080],
        preferred: [240, 360],
    },
    {
        available: [240, 720],
        allowed: [240, 360, 720, 1080],
        preferred: [240, 360],
    },
    {
        available: [240, 720],
        allowed: [240, 360, 1080],
        preferred: [240, 360],
    },
    {
        available: [720],
        allowed: [240, 360, 1080],
        preferred: [240, 360],
    },
    {
        available: [240, 360],
        allowed: [240, 360],
        preferred: [720, 1080],
    },
    {
        available: [240, 360, 720],
        allowed: [360, 'any'],
        preferred: [360, 720],
    },
    {
        available: [240, 360, 720],
        allowed: [240, 360, 720],
        preferred: ['any', 720],
    },
    {
        available: [240, 360, 720],
        allowed: [360, 1080],
        preferred: ['any', 720],
    },
    {
        available: [240, 360, 720],
        allowed: [1080],
        preferred: ['any', 720],
    },
]

attempt = (available, allowed, preferred) => {
    const allowedSet = new Set(allowed);
    const availableAllowed =
        allowed.includes('any')
            ?
            available :
            available.filter((item) => allowedSet.has(item));

    if (!!availableAllowed.length) {
        if (preferred.includes('any')) {
            return availableAllowed;
        }

        const availAllowReverse = [...availAllow].reverse();

        const result = preferred.reduce((accum, itemP) => {
            const max = availableAllowed.find(itemAA => itemAA >= itemP);

            if (max) {
                return accum.add(max);
            }

            const min = availAllowReverse.find(itemAA => itemAA < itemP);

            return accum.add(min);
        }, new Set([]));

        return Array.from(result);
    }
    return [];
}

inputs.forEach((item, index) => {
        console.log(`case ${index}`);
        const result = attempt(item.available, item.allowed, item.preferred);
        console.log(result, JSON.stringify(result) === JSON.stringify(outputs[index]));
    }
)

