import { httpTerminator, server } from './app';

const appExit = async (code: number): Promise<void>  => {
  try {
    console.log(`Attempting a graceful shutdown with code ${code}`);

    if (server.listening) {
      console.log('Terminating HTTP connections');
      await httpTerminator.terminate();
    }

    console.log(`Exiting gracefully with code ${code}`);
    process.exit(code);
  } catch (error) {
    console.error(`Error shutting down gracefully: ${error}`);
    console.error(`Forcing exit with code ${code}`);
    process.exit(code);
  }
}

export default appExit;
