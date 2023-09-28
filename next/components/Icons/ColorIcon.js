import colors from '@/styles/colors.module.scss'

const ColorIcon = ({ color }) => {

    var c = ''
    switch (color) {
        case 'red':
            c = colors.color_red
            break
        case 'green':
            c = colors.color_green
            break
        case 'yellow':
            c = colors.color_yellow
            break
        case 'purple':
            c = colors.color_purple
            break
        case 'blue':
            c = colors.color_blue
            break
        default:
            c = colors.color_no
            break
    }

    return (
        <>
            <i className={`${c} ${colors.highligted}`} />
        </>
    )
}

export { ColorIcon };