type titleType = {
    text: string,
    className?: string,
}
type paragraphType = {
    text: string[],
    className?: string,
}
type btnType = {
    text?: string,
    iconVariant?: 'right'|'down'|'left'|'up'|'download',
    className?: string,
}
type imgType = {
    imgSrc: string,
    width: number,
    height: number,
}
type DualSectionProps = {
    title: titleType,
    paragraph: paragraphType,
    btn?: btnType,
    img?: imgType,
    className?: string,
    imageOnLeft?: boolean,
    textColClassName?: string,
    imageColClassName?: string,
    children?: React.ReactNode,
}

type TextColProps = {
    title: titleType,
    paragraph: paragraphType,
    btn: btnType,
    className?: string,
    children?: React.ReactNode,
};
type Direction = {
    right: { src: string; axis: string; };
    down: { src: string; axis: string; };
    left: { src: string; axis: string; };
    up: { src: string; axis: string; };
    [key: string]: { src: string; axis: string; };
  };