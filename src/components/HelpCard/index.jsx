import css from "./HelpCard.module.css"

export const HelpCard = ({title}) => {
    return(
        <div className={css.helpcard}>
            <h3>{title}</h3>
        </div>
    )
}