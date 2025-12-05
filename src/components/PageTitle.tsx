interface Props {
    text: string
    color: string
}

const PageTitle: React.FC<Props> = (props: Props) => {
    return (
        <div className={`before:content-['●'] before:mr-2 before:text-${props.color} before:text-2xl
                         font-bold text-5xl mx-auto flex items-center justify-center`}>
            {props.text}
        </div>
    );
};

export default PageTitle;