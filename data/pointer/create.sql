INSERT INTO [dbo].[pointer]
    (
        [x],
        [y],
        [diameter],
        [Uf_asset_RESID],
        [Uf_asset_department],
        [stat]
    )
VALUES 
    (
        @x,
        @y,
        @diameter,
        @Uf_asset_RESID,
        @Uf_asset_department,
        @stat
    )
SELECT SCOPE_IDENTITY() AS no