import styles from "./Keyboard.module.css";
const KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type KeyboardProps = {
	activeLetters?: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
	disabled: boolean;
};

/* keyboard structure
 */
export function Keyboard({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
	disabled = false,
}: KeyboardProps) {
	return (
		<div className={styles.container}>
			<div className={styles.keyboard}>
				{KEYS.map((key) => {
					const isActive = activeLetters?.includes(key);
					const isInactive = inactiveLetters.includes(key);
					return (
						<button
							onClick={() => addGuessedLetter(key)}
							key={key}
							className={`${styles.btn} ${
								isActive ? styles.active : ""
							} ${isInactive ? styles.inactive : ""}
							}`}
							disabled={isInactive || isActive || disabled}
						>
							{key}
						</button>
					);
				})}
			</div>
		</div>
	);
}
