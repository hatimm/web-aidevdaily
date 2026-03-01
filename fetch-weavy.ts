import fs from 'fs';

async function run() {
  try {
    console.log('Fetching https://www.weavy.ai/ ...');
    const res = await fetch('https://www.weavy.ai/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    
    let html = await res.text();
    
    // Inject Vite dev script and hidden root so React doesn't crash
    html = html.replace(
      '</body>',
      '<div id="root" style="display: none;"></div>\n<script type="module" src="/src/main.tsx"></script>\n</body>'
    );
    
    fs.writeFileSync('index.html', html);
    console.log('Successfully updated index.html with live Weavy.ai source');
  } catch (err) {
    console.error('Failed to fetch:', err);
    process.exit(1);
  }
}

run();
