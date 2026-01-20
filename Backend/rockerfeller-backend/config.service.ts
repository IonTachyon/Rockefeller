import { TypeOrmModuleOptions } from "@nestjs/typeorm";

require('dotenv').config();

class ConfigService
{
    constructor(private env: { [k: string]: string | undefined }) { }

    private getValue(key: string): string {
        const value = this.env[key];
        
        if (value === undefined) {
            throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k));
        return this;
    } 

    public getPort() {
        return this.getValue('PORT');
    }

    public isProduction() {
        const mode = this.getValue('MODE');
        return (mode != 'DEV');
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            entities: ['**/*.entity.ts'],
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            ssl: false
        }
    }
}

const configService = new ConfigService(process.env)
    .ensureValues([
        'POSTGRES_HOST',
        'POSTGRES_PORT',
        'POSTGRES_USER',
        'POSTGRES_PASSWORD',
        'POSTGRES_DATABASE'
    ]);

export { ConfigService };
