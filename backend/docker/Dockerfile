FROM mcr.microsoft.com/dotnet/sdk:9.0 AS base
WORKDIR /app

# Copy project file and restore dependencies
COPY *.csproj ./
RUN dotnet restore

FROM base AS dev
WORKDIR /app

# Use dotnet watch for hot reloading
CMD ["dotnet", "watch", "run", "--urls", "http://0.0.0.0:5238"]