interface PropsButton extends React.ComponentPropsWithoutRef<'button'>{
    label:string
}

export default function Button({label, ...props}: PropsButton){
    return(
        <button {...props}>{label}</button>
    )
}