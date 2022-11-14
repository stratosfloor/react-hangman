import styles from "./HangmanWord.module.css";

type HangmanWordProps = {
	guessedLetters: string[];
	wordToGuess: string;
	reveal?: boolean;
};

export function HangmanWord({
	guessedLetters,
	wordToGuess,
	reveal = false,
}: HangmanWordProps) {
	return (
		<div className={styles.guess}>
			{wordToGuess.split("").map((letter, index) => (
				<span className={styles.bottomLetter}>
					<span
						className={
							guessedLetters.includes(letter) || reveal
								? styles.correctLetter
								: styles.letter
						}
						style={{
							color:
								!guessedLetters.includes(letter) && reveal
									? "red"
									: "black",
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
}
