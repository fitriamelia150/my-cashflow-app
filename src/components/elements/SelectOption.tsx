interface SelectProps extends React.ComponentPropsWithoutRef<'select'>{
    dataList: string[]
}

export default function SelectOption({dataList, ...props}: SelectProps){
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={props.name}>{props.name}</label>

            <select name={props.name} id={props.id} className={props.className} onChange={props.onChange}>
                {dataList.length > 0 &&
                    dataList.map(data=>
                        <option key={data} value={data}>{data}</option>
                    )
                }
            </select>
        </div>
    )
}