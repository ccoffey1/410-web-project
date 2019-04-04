import os
# run this file to combine all templates to one file

# Reading template files
header = open('templates/header.html', 'r').readlines()
navbar = open('templates/navbar.html', 'r').readlines()
footer = open('templates/footer.html', 'r').readlines()

# writes lines to file
def writeLines(file, lines):
    for line in lines:
        # print(line, end='')
        file.write(line)
    file.write('\n')

# adds all templates to the output file
def combineTemplate(inputFile, outputFile):
    writeLines(outputFile, header)
    writeLines(outputFile, navbar)
    # output file written into body of html
    writeLines(outputFile, inputFile)
    writeLines(outputFile, footer)

# starts in dir 'pages' goes through every file
# and calls combineTemplate on each file
# all files in 'pages' dir will be rendered with 
# each template
for root, dirs, files in os.walk('pages'):
    for template in files:
        # open template file to read
        bodyFile = open('pages/' + template, 'r')
        # open output file to write
        outputFile = open('app/' + template, 'w')
        combineTemplate(bodyFile, outputFile)




