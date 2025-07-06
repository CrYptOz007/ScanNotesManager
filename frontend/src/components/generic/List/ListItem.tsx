export interface IListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
}

export const ListItem = (props: IListItemProps) => {
    const { active, children, className, ...htmlProps } = props;
    
    return (
        <div 
            {...htmlProps}
            className={
                `p-4 transition-transform duration-300 ease-in-out hover:scale-101 hover:bg-gray-100 ${
                    active ? 'border-blue-500 border-r-8' : 'border border-gray-100'
                } ${className || ''}`
            }
        >
            {children}
        </div>
    );
}