const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'Nzk4NjEyMjA2NDQ2OTY4ODUy.X_3jkw.YtUGCW4zVkUKxt4AzfYkYDhIvMA' });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();