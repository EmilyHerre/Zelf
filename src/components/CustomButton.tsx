type Props = {
    text: string;
}

export const CustomButton = ({ text }: Props) => {

    return (
        <button type='button' className="custom-btn">
            <p>{text}</p>
            <p>Cuca</p>
        </button>
    )

}