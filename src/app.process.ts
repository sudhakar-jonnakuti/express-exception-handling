import process from 'node:process';

import appExit from './app.exit';

process.on('EACCES', () => {
  console.log(`Process ${process.pid} received EACCES`);
  appExit(1);
});

process.on('EADDRINUSE', () => {
  console.log(`Process ${process.pid} received EADDRINUSE`);
  appExit(1);
});

process.on('SIGTERM', () => {
  console.log(`Process ${process.pid} received SIGTERM`);
  appExit(0);
});

process.on('SIGINT', () => {
  console.log(`Process ${process.pid} received SIGINT`);
  appExit(0);
});
