import colors from '@/styles/colors.module.scss'

const ColorIcon = ({ color }) => {

    var c = ''
    switch (color) {
        case 'neutral':
            c = colors.color_neutral
            break
        case 'forests':
            c = colors.color_forests
            break
        case 'plains':
            c = colors.color_plains
            break
        case 'dark':
            c = colors.color_dark
            break
        case 'mountains':
            c = colors.color_mountains
            break
        case 'swamps':
            c = colors.color_swamps
            break
        default:
            c = colors.color_neutral
            break
    }

    return (
        <>
            <i className={`${c} ${colors.highligted}`} />
        </>
    )
}

export { ColorIcon };