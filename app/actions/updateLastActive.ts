'use server';

import { checkUser } from '@/lib/checkUser';
import { db } from '@/lib/db';

export async function updateLastActive(): Promise<void> {
  try {
    const user = await checkUser();
    if (!user) {
      return;
    }

    // Update the lastActiveAt field to current timestamp
    await db.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastActiveAt: new Date(),
      },
    });
  } catch (error) {
    console.error('Error updating last active:', error);
  }
}
