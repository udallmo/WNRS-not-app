import json
# Open the file in read mode


file_path = "WNRSQ.csv"
output_path = "questions.ts"
try:
    with open(file_path, "r") as file:
        # Read the contents of the file
        next(file)

        lines = file.readlines()
        data =  {
            "L1_QUESTIONS": [],
            "L2_QUESTIONS": [],
            "L3_QUESTIONS": [],
        }

        for index in range(len(lines)):
            level, question = lines[index].strip().split(",", 1)

            if level == "1":
                data["L1_QUESTIONS"].append(question)
            elif level == "2":
                data["L2_QUESTIONS"].append(question)
            elif level == "3":
                data["L3_QUESTIONS"].append(question)
        
        constants = ""
        for key, value in data.items():
            constants += f'export const {key}: string[] = {value};\n'

    with open(output_path, "w") as ts_file:
        ts_file.write(constants)


except FileNotFoundError:
    print("File not found.")
except IOError:
    print("An error occurred while reading the file.")
