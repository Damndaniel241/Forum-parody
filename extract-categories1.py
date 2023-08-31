import os
import re

# Path to the output folder
output_folder = './src/subpages/'  # Change this to the desired child folder name

text = '''
</Link><Link>Politics,</Link><Link>&nbsp;Crime,</Link>
<Link>&nbsp;Romance,</Link><Link>&nbsp;Jobs/Vacancies,</Link><Link>&nbsp;Career,</Link>
<Link>&nbsp;Business,</Link><Link>&nbsp;Investment,</Link><Link>&nbsp;Nysc,</Link>
<Link>&nbsp;Education,</Link><Link>&nbsp;Autos,</Link><Link>&nbsp;Car Talk,</Link>
<Link>&nbsp;Properties,</Link><Link>&nbsp;Health,</Link><Link>&nbsp;Travel,</Link>
<Link>&nbsp;Family,</Link><Link>&nbsp;Culture,</Link><Link>&nbsp;Religion,</Link>
<Link>&nbsp;Food,</Link><Link>&nbsp;Diaries,</Link><Link>&nbsp;Nairaland Ads,</Link>
<Link>&nbsp;Pets,</Link><Link>&nbsp;Agriculture</Link>
'''

pattern = r'<Link>&nbsp;(\w+),</Link>'
matches = re.findall(pattern, text)

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for match in matches:
    capitalized_match = match.capitalize()
    js_filename = f'{output_folder}/{capitalized_match}.js'  # Specify the output folder path
    with open(js_filename, 'w') as js_file:
            js_file.write(f"import React from 'react';\nimport {{ Link }} from 'react-router-dom';\n\nfunction {capitalized_match}() {{\n  return (\n    <div>{capitalized_match}</div>\n  );\n}}\n\nexport default {capitalized_match};")
    print(f'Created {js_filename}')
