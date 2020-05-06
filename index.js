
const available = [240,360,720];
const allowed = [360,720];
const preferred = [1080];

const inputs = [
    {available:[240,360,720],
        allowed:[360,720],
        preferred:[1080],
    },
    // {available:[240,360,720],
    //     allowed:[360,720],
    //     preferred:[360],
    // },
    {available:[240,720],
        allowed:[360,720],
        preferred:[1080],
        // preferred:[240,720,1080],
    },

    {available:[240],
        allowed:[360,720],
        preferred:[1080],
    },
    {available:[240,360,720],
        allowed:[240,360,720,1080],
        preferred:[240,360],
    },
    {available:[240,720],
        allowed:[240,360,720,1080],
        preferred:[240,360],
    },
    {available:[240,720],
        allowed:[240,360,1080],
        preferred:[240,360],
    },
    {available:[720],
        allowed:[240,360,1080],
        preferred:[240,360],
    },
    {available:[240,360],
        allowed:[240,360],
        preferred:[720,1080],
    },
    {available:[240,360,720],
        allowed:[360,'any'],
        preferred:[360,720],
    },
    {available:[240,360,720],
        allowed:[240,360,720],
        preferred:['any',720],
    },
    {available:[240,360,720],
        allowed:[360,1080],
        preferred:['any',720],
    },
    {available:[240,360,720],
        allowed:[1080],
        preferred:['any',720],
    },
]

attempt = (available, allowed, preferred)=>{
    const availAllow =
        allowed.find(item => item ==='any')
            ?
            available:
            available.filter((item)=>allowed.includes(item,0));
    if (!!availAllow.length) {
        if (preferred.find(item => item ==='any'))
            return availAllow;
        const result = preferred.reduce((accum, itemP) => {
            const max = availAllow.find(itemAA => itemAA >= itemP);
            const min = availAllow.reverse().find(itemAA => itemAA < itemP);
            availAllow.reverse();
            return accum.add(max ? max : min);
        }, new Set([]));
        return Array.from(result);
    }
    return [];
}

window.onload = ()=>{
    inputs.forEach((item,index)=> {
            console.log(`case ${index+1}`);
            console.log(attempt(item.available, item.allowed, item.preferred));
        }
    )
}
