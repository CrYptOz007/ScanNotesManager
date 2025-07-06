export interface IListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
}

export const ListItem = (props: IListItemProps) => {
    return (
        <div 
            {...props}
            className={
                `p-4 transition-transform duration-300 ease-in-out hover:scale-101 hover:bg-gray-100 ${
                    props.active ? 'border-blue-500 border-r-8' : 'border border-gray-100'
                }`
            }
        >
            {props.children}
        </div>
    );
}