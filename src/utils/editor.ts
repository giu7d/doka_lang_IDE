import { Grammar, highlight } from 'prismjs'

export const highlightWithLineNumbers = (
  value: string,
  grammar: Grammar,
  lang: string
) =>
  highlight(value, grammar, lang)
    .split('\n')
    .map((line, i) => `<span class='editor-line-number'>${i + 1}</span>${line}`)
    .join('\n')

export const fizzBuzzCode = `module FizzBuzz
	fun generate_list(number):
		if (number == 1):
		  <- [number]
    else:
      <- [number]
        |>  List.concat(generate_list(number-1))
    end
  end

	fun fizz_buzz(value):
    if (value % 15 == 0):
      <- "FizzBuzz"
    else if (value % 5 == 0):
      <- "Fizz"
    else if (value % 3 == 0):
      <- "Buzz"
    end
  end

  input = generate_list(100)
  output = List.map(input, fizz_buzz)

  IO.out(output)
`
