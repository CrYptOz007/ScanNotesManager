export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: IButtonProps) => {
    return (
        <button {...props} className="bg-blue-500 text-white hover:bg-blue-500/90 px-4 py-2 rounded">
            {props.children}
        </button>
    );
}