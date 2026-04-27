import { mkdirSync, renameSync } from 'fs';

// Move dist/index.html para dist/home/index.html
// Isso impede que o filesystem da Vercel sirva a homepage automaticamente
// para TODOS os domínios, permitindo que os rewrites baseados em host funcionem.
mkdirSync('dist/home', { recursive: true });
renameSync('dist/index.html', 'dist/home/index.html');

console.log('✅ Postbuild: dist/index.html → dist/home/index.html');
