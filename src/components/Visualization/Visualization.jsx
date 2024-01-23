import styles from './Visualization.module.css'

export function Visualization() {
    return (
        <section className={styles.visualization}>
            <div>
                <textarea readOnly className={styles.textArea} cols="90" rows="30"></textarea>
            </div>
        </section>
    )

}