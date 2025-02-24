interface SelectProps extends React.ComponentPropsWithoutRef<'select'>{
    dataList: string[] | []
}

export default function SelectOption({dataList, ...props}: SelectProps){
    // console.log('dataList', dataList)
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={props.name} className="text-sm">{props.name}</label>

            <select name={props.name} id={props.id} className={props.className} onChange={props.onChange}>
                <option key="-" value="-">-</option>
                {dataList.length > 0 &&
                    dataList.map(data=>
                        <option className="text-xs uppercase" key={data} value={data}>{data}</option>
                    )
                }
            </select>
        </div>
    )
}