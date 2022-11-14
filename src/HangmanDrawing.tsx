import styles from "./HangmanDrawing.module.css";

const HEAD = <div className={styles.head}></div>;
const BODY = <div className={styles.body}></div>;
const LEFTARM = <div className={styles.leftarm}></div>;
const RIGHTARM = <div className={styles.rightarm}></div>;
const LEFTLEG = <div className={styles.leftleg}></div>;
const RIGHTLEG = <div className={styles.rightleg}></div>;

const BODYPARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG];

type HangmanDrawingProps = {
	numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
	return (
		<div className={styles.container}>
			{BODYPARTS.slice(0, numberOfGuesses)}
			<div className={styles.drawingNoose}></div>
			<div className={styles.drawingTop}></div>
			<div className={styles.drawingPole}></div>
			<div className={styles.drawingBase}></div>
		</div>
	);
}
