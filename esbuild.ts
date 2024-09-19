import * as esbuild from 'esbuild';

const args = process.argv.slice(2);
const watch = args[0] === 'watch';

//
//

const config: esbuild.BuildOptions = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
};

//
//

if (watch) {
  const context = await esbuild.context(config);
  await context.watch();
  console.log('Watching...');
} else {
  await esbuild.build(config);
}
