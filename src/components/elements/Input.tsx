interface InputProps extends React.ComponentPropsWithoutRef<'input'>{
    error?: string
}

export default function Input({error, ...props}: InputProps){
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={props.name} className="text-sm capitalize">{props.name}</label>
            <input {...props}/>
        </div>
    )
}