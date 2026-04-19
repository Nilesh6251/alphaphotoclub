import os
import glob

html_files = glob.glob("*.html")

fa_link = '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">'

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Add FontAwesome if missing
    if 'font-awesome' not in content:
        # insert before </head>
        content = content.replace('</head>', f'    {fa_link}\n</head>')
    
    # 2. Replace the emoji with the icon
    content = content.replace('💬', '<i class="fab fa-whatsapp"></i>')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(html_files)} files.")
