import tips from './Tips'

let instance: any;
let prevTips: any;
let prevX = 0
let prevY = 0
let isDraging = false

export function debounce<Args extends any[]>(fn: (...args: Args) => void | Promise<void>, delay = 100) {
    let timer: NodeJS.Timeout | null = null
    let _args: Args
    return (...args: Args) => {
        _args = args
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            void fn(..._args)
        }, delay)
    }
}

const getTipText = (el: any) => {
    return el.getAttribute('aria-label') && el.getAttribute('ignore-tip') == null ? el.getAttribute('aria-label') : null
}

const getTips: any = (el: any) =>
    el
        ? getTipText(el)
        ? getTipText(el)
        : el.parentNode === document.documentElement
            ? null
            : getTips(el.parentNode)
        : null

const showTips = debounce(event => {
    if (isDraging) return
    let msg = getTips(event.target)?.trim()
    if (!msg) return
    prevTips = msg
    instance = tips({
        message: msg,
        autoCloseTime: 10000,
        position: {
            top: event.y + 12,
            left: event.x + 8,
        },
    }, {
        beforeClose(closeInstance: any) {
            if (instance !== closeInstance) return
            prevTips = null
            instance = null
        },
    })
}, 400)

const hideTips = () => {
    if (!instance) return
    instance.cancel()
}

const setTips = (tips: any) => {
    if (!instance) return
    instance.setTips(tips)
}

const updateTips = (event: any) => {
    if (isDraging) return
    if (!instance) return showTips(event)
    setTimeout(() => {
        let msg = getTips(event.target)
        if (!msg || prevTips === msg) return
        setTips(msg)
        prevTips = msg
    })
}

setTimeout(() => {
    document.body.addEventListener('mousemove', event => {
        if ((event.x == prevX && event.y == prevY) || isDraging) return
        prevX = event.x
        prevY = event.y
        hideTips()
        showTips(event)
    })

    document.body.addEventListener('click', updateTips)

    document.body.addEventListener('contextmenu', updateTips)
})
