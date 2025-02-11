interface PropsCard extends React.ComponentPropsWithoutRef<'div'>{}

export default function Card({children, ...props}: PropsCard){
    return(
        <div {...props}>{children}</div>
    )
}