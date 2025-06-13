# 第一阶段：构建应用
FROM node:latest AS builder

WORKDIR /app

# 复制依赖定义文件
# COPY package.json pnpm-lock.yaml ./
COPY package.json  ./

# 安装指定版本的 pnpm 和依赖
RUN npm install -g pnpm@7 && \
    pnpm install --prod --force

# 复制源代码并构建
COPY . .
RUN pnpm run build

# ----------------------------
# 第二阶段：运行应用
FROM node:latest

WORKDIR /app

# 从构建阶段复制构建产物
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# 安装生产依赖
RUN npm install -g pnpm@7 && \
    pnpm install --prod --frozen-lockfile

# 设置环境变量
ENV NODE_ENV=production

# 暴露端口
EXPOSE 3000

# 启动应用（生产环境）
CMD ["pnpm", "run", "start"]